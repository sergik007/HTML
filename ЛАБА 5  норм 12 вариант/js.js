window.onload = function() {
 var button = document.getElementById("button");
  var last = document.getElementById("last");
  var elem = document.createElement("text");
 button.onclick = function(){
//������� � ��������� ���� �������� �� ���� � id pole
   last.innerHTML = document.getElementById("pole").value;
//��������� ���
   last.style.display = "block";
//���������� ������� ��� �������
   last.onclick = function(){
//��������� ������
  last.style.position="fixed";
  last.style.left="0";
last.style.top="0";
last.style.width="100%";
last.style.height="100%";
last.style.zIndex="999";
last.style.borderRadius="0";
last.style.opacity="0.9";
last.style.color="red";
last.style.fontSize="900%";
};
 }
 
 
  };