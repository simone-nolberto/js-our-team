console.log('it works!');

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

console.log(team);

const mainBlock = document.querySelector('.container');
// console.log(mainBlock);


for (let i = 0; i < team.length; i++) {
    const member = team[i];
    // console.log(member.name, member.role, member.image);
    let memberName = member.name;
    let memberRole = member.role;
    let memberImage = member.image;
    // console.log(memberName, memberRole, memberImage);

    let markup = `<card> 
    <h1>${memberName}</h1>
    <p>${memberRole}</p>
    <img src="./assets/img/${memberImage} ">
    </card>`;
    mainBlock.innerHTML += markup;
    
    



}

