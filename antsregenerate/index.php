<?php require_once('../private/initialize.php'); ?>


<?php

$preview = false;
if(isset($_GET['preview'])) {
  // previewing should require admin to be logged in
  $preview = $_GET['preview'] == 'true' && is_logged_in() ? true : false;
}
$visible = !$preview;
$social_pic = NULL;

if(isset($_GET['id'])) {
  $page_id = $_GET['id'];
  $page = find_page_by_id($page_id, ['visible' => $visible]);
  if(!$page) {
    redirect_to(url_for('/index.php'));
  }
  $subject_id = $page['subject_id'];
  $subject = find_subject_by_id($subject_id, ['visible' => $visible]);
  if(!$subject) {
    redirect_to(url_for('/index.php'));
  }

}elseif(isset($_GET['p'])) {
  $blog_id = $_GET['p'];
  $blog = find_blog_by_id($blog_id, ['visible' => $visible]);
  $meta_title = $blog['meta_title']?? '';
  $meta_description = $blog['meta_description']?? '';
  $social_pic = $blog['img_url']?? '';
  if(!$blog) {
    redirect_to(url_for('/index.php'));
  }
  $subject_id = $blog['subject_id'];
  $subject = find_subject_by_id($subject_id, ['visible' => $visible]);
  if(!$subject) {
    redirect_to(url_for('/index.php'));
  }

} elseif(isset($_GET['subject_id'])) {
  $subject_id = $_GET['subject_id'];
  $subject = find_subject_by_id($subject_id, ['visible' => $visible]);
  if(!$subject) {
    redirect_to(url_for('/index.php'));
  }
  $page_set = find_pages_by_subject_id($subject_id, ['visible' => $visible]);
  $page = mysqli_fetch_assoc($page_set); // first page
  mysqli_free_result($page_set);
  if(!$page) {
    redirect_to(url_for('/index.php'));
  }
  $page_id = $page['id'];
} else {
  // nothing selected; show the homepage
}
?>


    <?php require_once(SHARED_PATH . '/head.php'); ?>



<body>
  <!-- <div class="page-header boxes"> -->
<!--         <div data-ix="hide-popup-on-initial" class="contact-full-wrapper">
         <div class="popup-div">
            <div class="popup-content-div">
               <div class="contact-wrapper-div in-devices">
                  <div class="algin-center">
                     <div>
                        <div class="sub-tittle top">EVERY DOLLAR COUNTS</div>
                        <h2 class="heading-4">Make a Donation Today</h2>
                     </div>
                  </div>
                  <div class="top-margin">
                     <div class="w-form">
                        <form id="email-form" name="email-form" data-name="Email Form">
                           <label for="Amount" class="field-label center">Amount</label><input type="text" id="Amount" name="Amount" data-name="Amount" placeholder="$" maxlength="256" required="" class="text-field-popup w-input"/><label for="Name-5" class="field-label center">Your Details</label><input type="text" id="Name-5" name="Name-4" data-name="Name 4" placeholder="Enter your name" maxlength="256" class="text-field-popup w-input"/><input type="email" id="Surname" name="Surname" data-name="Surname" placeholder="Enter your surname" maxlength="256" required="" class="text-field-popup w-input"/><input type="text" id="Enter-your-email-address" name="Enter-your-email-address" data-name="Enter your email address" placeholder="Enter your email address" maxlength="256" required="" class="text-field-popup w-input"/><input type="text" id="Additional-Information" name="Additional-Information" data-name="Additional Information" placeholder="Additional Information" maxlength="256" required="" class="text-field-popup w-input"/>
                           <div>
                              <div class="algin-center"><input type="submit" value="Place donation" data-wait="Please wait..." class="button w-button"/></div>
                           </div>
                        </form>
                        <div class="w-form-done">
                           <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div class="w-form-fail">
                           <div>Oops! Something went wrong while submitting the form</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div data-w-id="0aa23d50-42fe-dba2-e74c-5c7dbfbeb5e8" class="close-button"></div>
      </div> -->
	
<?php //require_once(SHARED_PATH . '/navbar.php'); ?>

    <?php
    require_once(SHARED_PATH . '/navbar.php');

      if(isset($page)) {
        // show the page from the database
        $allowed_tags = '<div><img><a><h1><h2><h3><h4><p><br><strong><em><blockquote><ul><li><video><source><input>';
        echo strip_tags($page['content'], $allowed_tags);


      } elseif(isset($blog)){
        ?><div class="page-header boxes"><?php
        require_once(SHARED_PATH . '/navbar.php');
        // show the page from the database
        $allowed_tags = '<div><img><a><h1><h2><h3><h4><p><br><strong><blockquote><em><ul><li><video><source><input>';
        //echo strip_tags($blog['content'], $allowed_tags);
        require_once(PUBLIC_PATH . '/post.php');

      } else {
        require_once(SHARED_PATH . '/navbar.php');
        // Show the homepage
        // The homepage content could:
        // * be static content (here or in a shared file)
        // * show the first page from the nav
        // * be in the database but add code to hide in the nav
        include(SHARED_PATH . '/static_homepage.php');
      }
    ?>

<?php require_once(SHARED_PATH . '/footer.php'); ?>
