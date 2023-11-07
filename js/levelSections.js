const paths = [5, 25, 45, 65, 85, 105, 125, 145, 165, 185, 205, 225, 245, 265, 285, 305, 325, 345, 365, 385, 405, 425] //y positions of possible paths for snakes
const levelSections = [
    [
    ]
];
for (var i = 0; i < paths.length; i++) {
    levelSections.push(new Snake(-50, paths[i], 2, 50));
}