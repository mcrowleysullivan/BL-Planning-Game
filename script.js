// Replace with your actual image filenames (they must be uploaded later in an 'images' folder)
const group1 = ['group1-1.jpg', 'group1-2.jpg', 'group1-3.jpg', 'group1-4.jpg'];
const group2 = ['group2-1.jpg', 'group2-2.jpg', 'group2-3.jpg', 'group2-4.jpg'];
const group3 = ['group3-1.jpg', 'group3-2.jpg', 'group3-3.jpg', 'group3-4.jpg'];
const group4 = ['group4-1.jpg', 'group4-2.jpg', 'group4-3.jpg', 'group4-4.jpg'];

function getRandomCard(group) {
  const index = Math.floor(Math.random() * group.length);
  return group[index];
}

document.getElementById('draw-btn').addEventListener('click', () => {
  document.getElementById('card1').src = `images/${getRandomCard(group1)}`;
  document.getElementById('card2').src = `images/${getRandomCard(group2)}`;
  document.getElementById('card3').src = `images/${getRandomCard(group3)}`;
  document.getElementById('card4').src = `images/${getRandomCard(group4)}`;
});
