var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var frunt_Image = images[0];
    var frunt_Name = names [0] ;
    document.getElementById("family_member_image").src = frunt_Image;
    document.getElementById("family_member_name").innerHTML = frunt_Name;

    var first_img = images[1];
    var first_img = names [1];
     document.getElementById("family_member_image").src = first_img;
     document.getElementById("family_member_image").innerHTML= first_img;

    var second_Image = images[2];
    var second_Name = names[2] ;
    document.getElementById("first_member_image").src = second_Image;
    document.getElementById("first_member_name").innerHTML = second_Name;

    var Three_Image = images[3];
    var Three_Name = names[3] ;
    document.getElementById("family_member_image").src = Three_Image;
    document.getElementById("family_member_name").innerHTML = Three_Name;

    var four_Image = images[4];
    var four_Name = names[4] ;
    document.getElementById("family_member_image").src = four_Image;
    document.getElementById("family_member_name").innerHTML = four_Name;

    var five_Image = images[5];
    var five_Name = names[5] ;
    document.getElementById("family_member_image").src = five_Image;
    document.getElementById("family_member_name").innerHTML = five_Name;
}
