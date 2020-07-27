<?php include_once( '../private/initialize.php' );?>
<?php include_once( '../private/shared/head.php' ); ?>


<?php require( '../mailjet/autoload.php' ); use \Mailjet\Resources; ?>

<?php // echo json_encode($_POST);die; ?>



<?php 


$subscription_message='Subscribe'; 

if (is_post_request()) {

  $subscriber = [];
  //$subscriber['subscr_amount'] = intval($_POST['subscr_amount']) ?? '';
  $subscriber['subscr_amount'] = 0;

  $subscriber['subscr_name'] = $_POST['subscr_name'] ?? '';
  $subscriber['subscr_surname'] = $_POST['subscr_surname'] ?? '';
  $subscriber['subscr_email'] = $_POST['subscr_email'] ?? '';
  $subscriber['subscr_information'] = $_POST['subscr_information'] ?? '';




  $result = insert_subscriber($subscriber);
    if($result === true) {
      $subscription_message='Thanks For Subscribing';
      $subscriber_name = $subscriber['subscr_name'] ?? 'subscriber';
      $mj = new \Mailjet\Client('0d54b6523dc208a27419dd67be67a8fa','7c6e21c56c5f1bc699d5d6c83a96cd3a',true,['version' => 'v3.1']);
      $body = [
        'Messages' => [
          [
            'From' => [
              'Email' => "info@antsregenerate.com", //new.maroon.getaway@gmail.com info@antsregenerate.com
              'Name' => "Antsregenerate"
            ],
            'To' => [
              [
                'Email' =>$subscriber['subscr_email'],// $subscriber['subscr_email'],
                'Name' => $subscriber['subscr_name']
              ]
            ],
            'Subject' => "Greetings from ANTSregenerate.",
            'TextPart' => "My first Mailjet email",
            'HTMLPart' => "<h3>Dear " . $subscriber_name . " welcome to ANTSregenerate</h3><br />Thank you for subscribing. We will be contacting you shortly with more information about our course offerings."//,
              //'CustomID' => "AppGettingStartedTest"
          ]
        ]
      ];
      $response = $mj->post(Resources::$Email, ['body' => $body]);
      $response->success(); //&& var_dump($response->getData());
      //echo json_encode($response->getData());
    } else {
      $subscription_message='Sorry, Subscription Failed';
      $errors = $result;
    }

}else{


}?>

<body>
<?php include_once( '../private/shared/navbar.php' ); ?>
      <div class="section-2 coming-soon">
         <div class="_404-container w-container">
            <h1 data-w-id="9713e1c4-96b1-6292-5de2-a35a17891111" style="opacity:0" class="hero-tittle"><?php echo $subscription_message; ?></h1>
            <p data-w-id="b2e5b0bf-1ab5-6253-c2e5-32260df6a9f8" style="opacity:0;font-size:30px" class="hero-paragraph"><?php echo $errors[1] ?? 'If your email provider is Gmail Check your "All Mail" folder.';?></p>
            <a href="<?php echo $parent_dir ;?>" data-w-id="87df1727-7aef-cc67-b19a-67648001a826" style="opacity:0" class="button _404 w-button">BACK HOMEPAGE</a>
         </div>
      </div>
      <div class="call-to-action">
         <div class="w-container">
            <div class="w-row">
               <div class="w-col w-col-9">
                  <h2 class="cta-text white">In every walk with nature one receives far more than he seeks.</h2>
               </div>
               <div class="w-col w-col-3"><a href="#" data-ix="donate-btn-interaction" data-w-id="bbcfaed7-269a-c0fb-e0f9-8d08ce818fd0" class="button outline white w-button">Donate Funds</a></div>
            </div>
         </div>
      </div>
<?php include_once( '../private/shared/footer.php' ); ?>

?>





