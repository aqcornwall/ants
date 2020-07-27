




   <div class="w-container">
      <div class="div-text _2">
         <a href="/authors/denis-william" class="w-inline-block">
            <div style="background-image:url(&quot;https://live.staticflickr.com/65535/50120598582_1cc60a1dd8_m.jpg&quot;)" class="author-div-image"></div>
         </a>
         <h1 data-w-id="c21b9fae-c2f7-acbf-800d-f2e3b7df3360" style="opacity:0" class="heading center white-font"><?php echo $blog['menu_name'];?></h1>
         <div data-w-id="4053f5e6-f0a5-7b9c-1f0c-41c2ddafda0e" style="opacity:0" class="separated-div-wrapper">
            <div class="separator header"></div>
            <div class="separator header center"></div>
            <div class="separator header"></div>
         </div>
         <div data-w-id="6fc4f81c-0c3a-b974-c339-d9471bf7e16e" style="opacity:0" class="w-row">
            <div class="column-6 w-col w-col-6 w-col-small-6">
               <div class="div-author">
                  <?php
                  $authors_set = find_all_admins();
                  while($author = mysqli_fetch_assoc($authors_set)) {
                     if ($author['id']== $blog['author_id']) {
                           $author_fullname = $author['first_name'].' '.$author['last_name'];
                     }
                  }?>
                  <div class="author lite blog"><?php echo $author_fullname; ?></div>
               </div>
            </div>
            <div class="w-col w-col-6 w-col-small-6">
               <div class="thumbnail date blog"><?php echo date_format(date_create($blog['date']),"Y/m/d" ); ?></div>
            </div>
         </div>
      </div>
   </div>
</div>
<div class="section white-blog">
   <div class="w-container">
      <div class="blog-div over singel">
         <div style="background-image:url(&quot;<?php echo url_for('/images/').$blog['img_url']; ?>&quot;)" class="div-blog-image"></div>
         <div class="div-info">
            <?php echo strip_tags($blog['content'], $allowed_tags); ?>
            <div class="buttons-div w-clearfix"><a href="<?php echo url_for('/blogs.php'); ?>" class="button left w-button">VIEW ALL BLOGS</a></div>
         </div>
      </div>
   </div>
</div>
