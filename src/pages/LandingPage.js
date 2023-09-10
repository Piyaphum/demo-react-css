import man from "../assets/icons/man.png";
import { useNavigate } from "react-router-dom";

function LandingPage () {
    const navigate = useNavigate();
    const handleToDetail = () => {
        navigate("/details");
    };
    
    return (
        <div className="text-center">
            <p className="font-mono text-2xl font-bold uppercase">About me</p>
            <br/>
            
            <div className="flex justify-center">
                <img src={man} alt="Man" width={200} className="w-[20%] my-3 bg-white rounded-full p-6"/>
            </div>
            <br/>
            
            <h1 className="font-mono text-2xl font-bold uppercase text-white">Piyaphum's Portfolio</h1> 
                <p className="font-md mt-2 font-bold text-white mx-8 md:mx-36 font-mono">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            <br />
            
            <button className="text-xl text-[#f5f5dc] underline" onClick={() => handleToDetail()}>NEXT</button>
            
        </div>
    );
}

export default LandingPage;