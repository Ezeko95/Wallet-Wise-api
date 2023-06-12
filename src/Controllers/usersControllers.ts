import { User } from "../models/User";

export const createUser = async (user:any) => {

    const newUser = await User.create(user)

    return newUser

}

// const createNewActivity = async (name, difficulty, duration, season, country) => {
//     await getAllCountriesInfo()

//     const countrySelected = await Country.findAll({
//         where: { name : country }
//     })

//     const repeatActivity = await Activity.findOne({ 
//         where: { 
//             name: name, 
//             difficulty: difficulty, 
//             duration: duration,
//             season: season 
//         } 
//     });

//     if(!repeatActivity){
//         const newActivity = await Activity.create({
//             name, 
//             difficulty, 
//             duration, 
//             season,
//         });
//         const activityCountry = await newActivity.addCountry(countrySelected)

//         return activityCountry 
//     } else {
//         const activityCountry = await repeatActivity.addCountry(countrySelected)

//         return activityCountry;
//     }
// }
