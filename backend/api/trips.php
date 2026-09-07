<?php


header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');




if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$dataFile = __DIR__ . '/../trips.json';

if (!file_exists($dataFile)) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Trips data file not found'
    ]);
    exit;
}

$trips = json_decode(file_get_contents($dataFile), true);

if ($trips === null) {
    $trips = [];
}
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode($trips);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (
        empty($input['destination']) ||
        empty($input['startDate']) ||
        empty($input['endDate'])
    ) {
        http_response_code(400);
        echo json_encode([
            'error' => 'Destination, start date, and end date are required'
        ]);
        exit;
    }

    $newTrip = [
        'id' => count($trips) > 0 ? max(array_column($trips, 'id')) + 1 : 1,
        'destination' => $input['destination'],
        'startDate' => $input['startDate'],
        'endDate' => $input['endDate']
    ];

    $trips[] = $newTrip;

    file_put_contents(
        $dataFile,
        json_encode($trips, JSON_PRETTY_PRINT)
    );

    http_response_code(201);
    echo json_encode($newTrip);
    exit;
}

http_response_code(405);

echo json_encode(['error' => 'Method not allowed']);
