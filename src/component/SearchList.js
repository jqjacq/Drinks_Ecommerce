// import React, {useState} from "react";
// import coffeeteas from "../data/coffeetea";

// const SearchList = () => {
//     const [SearchInput, setSearchInput] = useState("");
//     const handleChange = (event) => {
//         event.preventDefault();
//         setSearchInput(event.target.value)   
//         console.log(SearchInput, event.target.value)
//             if (event.target.value.length > 0) {
//             const result = coffeeteas.filter((coffeetea) => {
//                 return coffeetea.category.toLowerCase() === event.target.value.toLowerCase()
//                 // .match(event.target.value)
//         })
//             console.log(result)
//          }
//     }
//     return (
//         <li>
//             <input type="text" 
//             className="search" 
//             placeholder="Search..."
//             onChange= {handleChange}
//             value={SearchInput} />
//             <i class="fa-solid fa-magnifying-glass"></i>
//         </li>
//     )
// }

// export default SearchList 