import React from 'react';

const TeamPage = () => {
    const teamMembers = [
        {
            name: "Doraemon",
            role: "Babysitting robot cat from the future",
            image: "https://static.vecteezy.com/system/resources/previews/027/806/381/non_2x/doraemon-cute-free-vector.jpg"
        },
        {   
            name: "Nobita",
            role: "Lazy schoolboy and Doraemon's best friend",
            image: "https://www.dora-world.com.tw/dist/images/character_3.png"
        },
    ];
    return (
        <div>
            <h1>Team Page</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', overflow: 'hidden' }}>
                {teamMembers.map((member, index) => (
                    <div key={index} style={{ margin: '20px', padding: '20px', border: '1px solid black', width: 'calc(50% - 40px)' }}>
                        <img src={member.image} alt={member.name} style={{ width: '100px', height: '100px' }} />
                        <h2 style={{ whiteSpace: 'nowrap' }}>{member.name}</h2>
                        <h3 style={{ whiteSpace: 'nowrap' }}>{member.role}</h3>
                        <p>{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamPage;
