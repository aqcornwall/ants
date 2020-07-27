<?php
  require 'autoload.php';
  use \Mailjet\Resources;
  $mj = new \Mailjet\Client('4d3ac832b0aa7a44009560c0889f3a4d','9e515e0bce8cd9398f9e66e9daa4829b',true,['version' => 'v3.1']);
  $body = [
    'Messages' => [
      [
        'From' => [
          'Email' => "aqcornwall@gmail.com",
          'Name' => "Fausto Andrea"
        ],
        'To' => [
          [
            'Email' => "aqcornwall@gmail.com",
            'Name' => "Fausto Andrea"
          ]
        ],
        'Subject' => "Greetings from Mailjet.",
        'TextPart' => "My first Mailjet email",
        'HTMLPart' => "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
        'CustomID' => "AppGettingStartedTest"
      ]
    ]
  ];
  $response = $mj->post(Resources::$Email, ['body' => $body]);
  $response->success() && var_dump($response->getData());
?>

