<?php include_once( '../private/initialize.php' ); ?>
<?php include_once( '../private/shared/head.php' ); ?>

   <body>

      <?php include_once( '../private/shared/navbar.php' ); ?>


      <div data-ix="slide-in-scroll-navigation" class="page-header blog-2">
         <div class="w-container">
            <div class="div-text _2">
               <h1 data-w-id="6cb24370-5905-0067-bd48-60f4a4cd1409" style="opacity:0" class="heading center white-font">Featured Blog Posts</h1>
               <div data-w-id="13e89c14-d394-d53c-bdc5-b1debd5a451a" style="opacity:0" class="separated-div-wrapper">
                  <div class="separator header"></div>
                  <div class="separator header center"></div>
                  <div class="separator header"></div>
               </div>
               <p data-w-id="7e2f213f-04b6-8292-be04-3594ab12a484" style="opacity:0" class="paragraph center white">With a nice modern and intuitive interface you can control contents to be contained and organised.</p>
            </div>
         </div>
      </div>
      <div class="section blog">
         <div class="w-container">
            <div data-ix="fade-in-on-load" class="blog-div over second">
               <div class="w-dyn-list">
                  <div class="w-dyn-items">

                     <?php $blogs_list_blog_page = find_all_blogs(['visible' => $visible]); ?>

                     <?php while($current_blog = mysqli_fetch_assoc($blogs_list_blog_page)) { //parent loop   ?>
                        <?php if (!$current_blog['visible']) {
                           continue;
                        }?>                     
                     <div class="w-dyn-item">
                        <div class="intro-post">
                           <a href="<?php echo url_for('index.php?p=' . h(u($current_blog['id']))); ?>" style="background-image:url(&quot;<?php echo url_for('/images/').$current_blog['img_url']; ?>&quot;)" class="link-blog-image w-inline-block" ></a>
                           <div class="post-content">
                              <a href=" <?php echo url_for('index.php?p=' . h(u($current_blog['id']))); ?>" class="link-blog w-inline-block">
                                 <h1 class="heading features blog"><?php echo $current_blog['menu_name'];?></h1>
                              </a>
                              <p><?php echo $current_blog['description'];?></p>
                              <div class="w-clearfix">
                                 <img src="https://live.staticflickr.com/65535/50120598582_1cc60a1dd8_m.jpg" alt="" class="author-image"/>
                                 <?php $subject_theme = find_subject_by_id($current_blog['subject_id']); ?>
                                 <div class="author lite black"><?php echo  $subject_theme['menu_name'];?></div>
                                 <div class="thumbnail date black"><?php echo date_format(date_create($current_blog['date']),"Y/m/d" );?></div>
                              </div>
                           </div>
                        </div>
                     </div>

                  <?php }?>

<!--                      <div class="w-dyn-item">
                        <div class="intro-post">
                           <a href="<?php echo $parent_dir.'/post2.php'; ?>" style="background-image:url(&quot;https://assets.website-files.com/58fddb348d8ae76d1b659780/5e1f701c062614712b52b7d3_hgv_woqnp3y-aaron-benson.jpg&quot;)" class="link-blog-image w-inline-block"></a>
                           <div class="post-content">
                              <a href="<?php echo $parent_dir.'/post2.php'; ?>" class="link-blog w-inline-block">
                                 <h1 class="heading features blog">Risk Of Losing it</h1>
                              </a>
                              <p>This theme does everything you could possibly want it to do and not only that.</p>
                              <div class="w-clearfix">
                                 <img src="https://assets.website-files.com/58fddb348d8ae76d1b659780/5e5a9620c9fe84f5138e7775_Team-4.jpg" alt="" class="author-image"/>
                                 <div class="author lite black">Nature</div>
                                 <div class="thumbnail date black">April 24, 2017</div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="w-dyn-item">
                        <div class="intro-post">
                           <a href="<?php echo $parent_dir.'/post3.php'; ?>" style="background-image:url(&quot;https://assets.website-files.com/58fddb348d8ae76d1b659780/5e1f7033062614b2b552b846_n-sxa8vegdk-ales-krivec_1.jpg&quot;)" class="link-blog-image w-inline-block"></a>
                           <div class="post-content">
                              <a href="<?php echo $parent_dir.'/post3.php'; ?>" class="link-blog w-inline-block">
                                 <h1 class="heading features blog">Summer Camp</h1>
                              </a>
                              <p>This theme does everything you could possibly want it to do and not only that.</p>
                              <div class="w-clearfix">
                                 <img src="https://assets.website-files.com/58fddb348d8ae76d1b659780/5e5a9620c9fe84f5138e7775_Team-4.jpg" alt="" class="author-image"/>
                                 <div class="author lite black">Nature</div>
                                 <div class="thumbnail date black">April 24, 2017</div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="w-dyn-item">
                        <div class="intro-post">
                           <a href="<?php echo $parent_dir.'/post4.php'; ?>" style="background-image:url(&quot;https://assets.website-files.com/58fddb348d8ae76d1b659780/5e1f704bf3f22af0c5273d3b_c-lad9xizbg-tim-gouw_1.jpg&quot;)" class="link-blog-image w-inline-block"></a>
                           <div class="post-content">
                              <a href="<?php echo $parent_dir.'/post4.php'; ?>" class="link-blog w-inline-block">
                                 <h1 class="heading features blog">Invasive Education</h1>
                              </a>
                              <p>This theme does everything you could possibly want it to do and not only that.</p>
                              <div class="w-clearfix">
                                 <img src="https://assets.website-files.com/58fddb348d8ae76d1b659780/5e5a96270e170645847740e0_Team-1.jpg" alt="" class="author-image"/>
                                 <div class="author lite black">Motive</div>
                                 <div class="thumbnail date black">April 24, 2017</div>
                              </div>
                           </div>
                        </div>
                     </div> -->

                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="call-to-action alternative">
         <div class="w-container">
            <div class="w-row">
               <div class="w-col w-col-9">
                  <h2 class="cta-text white">In every walk with nature one receives far more than he seeks.</h2>
               </div>
               <div class="column-8 w-col w-col-3"><a href="#" data-ix="show-contact-wrapper-on-click" data-w-id="984b1762-5089-70a9-61d5-eeb741f48332" class="button cta w-button">Donate Funds</a></div>
            </div>
         </div>
      </div>
<?php include_once( '../private/shared/footer.php' ); ?>