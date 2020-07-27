<?php
  // Default values to prevent errors
  
  $page_id = $page_id ?? '';
  $subject_id = $subject_id ?? '';
  $visible = $visible ?? true;



?>

<?php $parent_dir = dirname($_SERVER['SCRIPT_NAME']);

//$db_count = count_pages_by_subject_id($array_page['subject_id'], ['visible' => true]);

$counter = 1;

?>
<div data-collapse="medium" data-animation="default" data-duration="400" data-w-id="b5ba5e62-503d-11f3-d503-bf44faec63f5" class="scroll-navbar w-hidden-medium w-hidden-small w-hidden-tiny w-nav">
  <div class="container-nav w-container">
    <!-- logo -->
    <a href="<?php echo url_for('/') ;?>" class="brand w-nav-brand">
      <img style="width:150px" src="images/logo_black.svg" width="60" alt=""/>
    </a>

    <nav role="navigation" class="nav-menu w-nav-menu">
      <!-- home -->
      <div data-delay="0" class="nav-link black w-dropdown">
        <div class="dropdown-toggle black w-dropdown-toggle">
          <div class="text-block-38">
            <a style="text-decoration: none;color:black;" href="<?php echo url_for('/') ;?>">Home</a>
          </div>
        </div>
      </div>
      <!-- Black dropdown -->
      <?php $array_subjects = find_all_subjects(['visible' => $visible]); ?>
      <?php while($array_subject = mysqli_fetch_assoc($array_subjects)) { //parent loop   ?>
 


    <div data-delay="0" class="nav-link black w-dropdown">
      <div class="dropdown-toggle black w-dropdown-toggle">
        <div style="color:black" class="<?php echo 'text-block-'. $array_subject['class_2'];?>"><?php echo $array_subject['menu_name']; ?></div>
        <div class="dropdown-arrow w-icon-dropdown-toggle"></div>
      </div>
      <?php $db_count = count_pages_by_subject_id($array_subject['id'], ['visible' => true]);?>
      <?php if( $db_count<3 ){echo '<nav class="dropdown-list w-dropdown-list">';}else{echo'<nav class="dropdown-list big w-dropdown-list">';}?>

          <div class="w-row">
            <div class="w-col w-col-4 w-col-stack">
             <?php $array_pages = find_pages_by_subject_id($array_subject['id'], ['visible' => $visible]); ?>  
            <?php //foreach ($array_pages as $array_page) {?>
            <?php while($array_page = mysqli_fetch_assoc($array_pages)) {?>
              
   <?php if ( $array_page['subject_id']== $array_subject['id']){  ?>

      <?php //$suffix = $array_page['suffix']??'c_soon'; ?> <!-- delete this block on db mode -->
        <?php $link_process = ($array_page['menu_name'] <> 'blogs')  ? url_for('index.php?id=' . h(u($array_page['id']))) : url_for('/blogs.php'); ?>
        <a href="<?php echo $link_process; ?>" class="dropdown-link w-dropdown-link"><?php echo $array_page['menu_name']; ?></a> <?php $counter++; echo $counter; }//if ?> 
  
        <?php if ($counter>=3 && $db_count<9){echo '</div><div class="w-col w-col-4 w-col-stack">'; $counter=0;}elseif($counter>3 && $db_count>=9){
  
            echo '</div><div class="w-col w-col-4 w-col-stack">';
        }?>
   
  <?php  }//while child ?> 
            </div>
         </div>
      </nav>
    </div>
  <?php $counter=0;}//while parent ?>

    </nav><!-- main nav -->

      <!-- hamburger responsive -->
    <div class="menu-button gray w-nav-button">
      <div class="icon w-icon-nav-menu"></div>
    </div>

  </div><!-- container nav -->
</div><!-- main div -->

<!-- initial nav clear -->
<div data-collapse="medium" data-animation="default" data-duration="400" class="nav-bar w-nav">
  <div class="container-nav w-container">
    <a href="<?php echo url_for('/') ;?>" class="brand w-nav-brand">
      <img style="width:180px;margin-top:10px" src="images/logo-white.svg" width="170" alt=""/>
    </a>
    <nav role="navigation" class="nav-menu w-nav-menu">
      <div data-delay="0" class="nav-link w-dropdown">
        <div class="dropdown-toggle w-dropdown-toggle">
          <div class="text-block-19">
            <a style="text-decoration: none;color:white;" href="<?php echo url_for('/') ;?>">Home</a>
          </div>
        </div>
      </div>
      <?php $array_subjects = find_all_subjects(['visible' => $visible]); ?>
      <?php while($array_subject = mysqli_fetch_assoc($array_subjects)) { //parent loop   ?>
      <?php $db_count = count_pages_by_subject_id($array_subject['id'], ['visible' => true]);?>  

    <div data-delay="0" class="nav-link w-dropdown">
      <div class="dropdown-toggle w-dropdown-toggle">
        <div style="color:white" class="<?php echo 'text-block-'. $array_subject['class_1'];?>"><?php echo $array_subject['menu_name']; ?></div>
        <div class="dropdown-arrow w-icon-dropdown-toggle"></div>
      </div>
   
      <?php if($db_count<3){echo '<nav class="dropdown-list w-dropdown-list">';}else{echo'<nav class="dropdown-list big w-dropdown-list">';}?>      
          <div class="w-row">
            <div class="w-col w-col-4 w-col-stack">
            
            <?php $array_pages = find_pages_by_subject_id($array_subject['id'], ['visible' => $visible]); ?>  
            <?php while($array_page = mysqli_fetch_assoc($array_pages)) { //nested loop   ?>  

            <?php if ( $array_page['subject_id']== $array_subject['id']){  ?>
        <?php $link_process = ($array_page['menu_name'] <> 'blogs')  ? url_for('index.php?id=' . h(u($array_page['id']))) : url_for('/blogs.php'); ?>
        <a href="<?php echo $link_process; ?>" class="dropdown-link w-dropdown-link"><?php echo $array_page['menu_name']; ?></a> <?php $counter++; }//if ?>
        
        <?php if ($counter>2 && $db_count<9){echo '</div><div class="w-col w-col-4 w-col-stack">'; $counter=0;}elseif($counter>3 && $db_count>9){
            echo '</div><div class="w-col w-col-4 w-col-stack">';
        }?>
   
  <?php  }//while child ?> 
            </div>
         </div>
      </nav>
    </div>
  <?php $counter=0;}//while parent ?>

    </nav>
    <div class="menu-button w-nav-button">
      <div class="icon w-icon-nav-menu"></div>
    </div>
  </div>
</div>



    


 