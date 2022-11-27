import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
    const contractAddress = "0xecF7558E6Ad5C863206Fb33b076A6e7ef1274A61";
    const contractABI = abiJSON.abi;
    let rsvpContract;
    try {
        const { ethereum } = window;
        if (ethereum) {
            // checking for eth object in the window
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            rsvpContract = new ethers.Contract(contractAddress, contractABI, signer);
        } else {
            console.log("Ethereum object doesn't exist!")
        }
    } catch (error) {
        console.log("Error:", error);
    }
    return rsvpContract;
}

export default connectContract;
