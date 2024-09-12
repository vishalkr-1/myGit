const { userDetails } = require("../model/signUp");

const softDelete = async (req, res) => {
    try {
        const result = await userDetails.findByIdAndUpdate(
            req.params.id,
            {
                isDeleted: true,
                deletedAt: new Date()  // Make sure this is being set
            },
            { new: true }  // Return the updated document
        );

        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("User deleted successfully");
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({ message: "Server error" });
    }
}
const getActiveUsers=async(req,res)=>{
    console.log("inside")
    try{
       const user= await userDetails.find({
            isDeleted:false,
        })
        console.log(user)
        return res.status(200).json({ message: "Successfully get " });
    }catch(err){
        return res.status(500).json({message: "Server error"})

    }
}


const restoreUser = async (req, res) => {
    console.log("restore inside")
    const userId=req.params.id
    if(!userId) return  res.status(404).json({ message: "UserId not found" });
    try {
        const result = await userDetails.findByIdAndUpdate(
            userId,
            {
                isDeleted: false,
                deletedAt: null// Make sure this is being set
            },
            { new: true }  // Return the updated document
        );

        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("User restored successfully");
        return res.status(200).json({ message: "User restored successfully" });
    } catch (error) {
        console.error("Error restoring user:", error);
        return res.status(500).json({ message: "Server error" });
    }
}




module.exports={
    
    softDelete,
    getActiveUsers,restoreUser

}