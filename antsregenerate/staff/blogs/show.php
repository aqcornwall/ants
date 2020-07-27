<?php require_once('../../../private/initialize.php'); ?>

<?php

require_login();

// $id = isset($_GET['id']) ? $_GET['id'] : '1';
$id = $_GET['id'] ?? '1'; // PHP > 7.0

$blog = find_blog_by_id($id);
$subject = find_subject_by_id($blog['subject_id']);

?>

<?php $blog_title = 'Show Blog'; ?>
<?php include(SHARED_PATH . '/staff_header.php'); ?>

<div id="content">

  <a class="back-link" href="<?php echo url_for('/staff/subjects/show.php?id=' . h(u($subject['id']))); ?>">&laquo; Back to Subject blog</a>

  <div class="blog show">

    <h1>blog: <?php echo h($blog['menu_name']); ?></h1>

    <div class="actions">
      <a class="action" href="<?php echo url_for('/index.php?id=' . h(u($blog['id'])) . '&preview=true'); ?>" target="_blank">Preview</a>
    </div>

    <div class="attributes">
      <dl>
        <dt>Subject</dt>
        <dd><?php echo h($subject['menu_name']); ?></dd>
      </dl>
      <dl>
      <dl>
        <dt>Author</dt>
        <?php $author_set = find_admin_by_id( $blog['author_id'] );?>
        <dd><?php echo h($author_set['first_name']); ?></dd>
      </dl>
      <dl>
        <dt>Position</dt>
        <dd><?php echo h($blog['position']); ?></dd>
      </dl>
      <dl>
        <dt>Title</dt>
        <dd><?php echo h($blog['menu_name']); ?></dd>
      </dl>
      <dl>
      <dl>
        <dt>Description</dt>
        <dd><?php echo h($blog['description']); ?></dd>
      </dl>
      <dl>
        <dt>Visible</dt>
        <dd><?php echo $blog['visible'] == '1' ? 'true' : 'false'; ?></dd>
      </dl>
      <dl>
        <dt>Content</dt>
        <dd><?php echo h($blog['content']); ?></dd>
      </dl>
<!--       <dl>
        <dt>Suffix</dt>
        <dd><?php //echo h($blog['suffix']); ?></dd>
      </dl> -->
  
      <dl>
        <dt>img url</dt>
        <dd><?php echo h($blog['img_url']); ?></dd>
      </dl>
      <dl>         
        <dt>Meta Title</dt>
        <dd><?php echo h($blog['meta_title']); ?></dd>
      </dl>
      <dl>
        <dt>Meta Description</dt>
        <dd><?php echo h($blog['meta_description']); ?></dd>
      </dl>
    </div>


  </div>

</div>

<?php include(SHARED_PATH . '/staff_footer.php'); ?>
