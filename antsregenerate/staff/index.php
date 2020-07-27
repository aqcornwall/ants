<?php require_once('../../private/initialize.php'); ?>

<?php require_login(); ?>

<?php $page_title = 'Staff Menu'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content_id">
  <div id="main-menu">
    <h2>Main Menu</h2>
<!--     <ul>
      <li><a href="<?php echo url_for('/staff/admins/index.php'); ?>">Admins</a></li>
      <li><a href="<?php echo url_for('/staff/subjects/index.php'); ?>">Subjects</a></li>
      <li><a href="<?php echo url_for('/staff/pages/index.php'); ?>">Pages</a></li>
      <a class="header-services-menu-link w-button" href="<?php echo url_for('/staff/pages/index.php'); ?>">Pages</a>
      <li><a class="header-services-menu-link w-button" href="<?php echo url_for('/staff/pages/index.php'); ?>">Pages</a></li>
      <li><a class="header-services-menu-link w-button" href="<?php echo url_for('/staff/pages/index.php'); ?>">Pages</a></li>

    </ul> -->
<div class="header-menu-block">
  <a href="<?php echo url_for('/staff/admins/index.php'); ?>" class="header-services-menu-link w-button">Admins</a>
  <a href="<?php echo url_for('/staff/subjects/index.php'); ?>" class="header-services-menu-link w-button">Subjects</a>
  <a href="<?php echo url_for('/staff/pages/index.php'); ?>" class="header-services-menu-link w-button">Pages</a>
  <a href="<?php echo url_for('/staff/blogs/index.php'); ?>" class="header-services-menu-link w-button">Blogs</a>
  <a href="<?php echo url_for('/staff/events/index.php'); ?>" class="header-services-menu-link w-button">Events</a>
  <a href="<?php echo url_for('/staff/subscribers/index.php'); ?>" class="header-services-menu-link w-button">Subscribers</a>

  
  
</div>
  </div>

</div>

<?php include(SHARED_PATH . '/staff_footer.php'); ?>

