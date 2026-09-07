<?php


header('Access-Control-Allow-Origin: http://localhost:5173');
header('Content-Type: application/json');

$trips = [
    [
        'id' => 1,
        'destination' => 'Tokyo, Japan',
        'startDate' => '2026-10-12',
        'endDate' => '2026-10-20'
    ],
    [
        'id' => 2,
        'destination' => 'Paris, France',
        'startDate' => '2027-03-15',
        'endDate' => '2027-03-22'
    ]
];

echo json_encode($trips);
