import styled from "styled-components";

const MainDiv = styled.div`
    height: 130px;
    background: #F7F5F4;
    width: 100%;

   


`

const NameDiv = styled.div`
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    flex-direction: column;
    justify-content: left;

`


const ProfileNav = () =>{
    return(
        
        <>
            <MainDiv>
                <div >
                    {/* Profile Section */}
                    <div>
                        <img src="https://cdn.kastatic.org/images/avatars/svg/eggleston-blue.svg" alt="" className="profile-image"/>
                        <NameDiv>
                            <h1>Bishal Samanta</h1>
                            <p>{"@work.bishalsamanta - Hello I am eager to learn things"}</p>
                        </NameDiv>
                            
                        
                    </div>
                    {/* Button Section */}
                    <div >
                        Button Section
                    </div>
                </div>
            </MainDiv>
        </>
    )
}

export default ProfileNav;
