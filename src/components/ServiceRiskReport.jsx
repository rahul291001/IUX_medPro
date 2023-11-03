import React, { useState, useEffect } from "react";
import "../styles/ServiceRiskReport.css"; // Import the CSS file
import speach from "../image/speach.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineSwapRight } from "react-icons/ai";
import VoicePopup from "./VoicePopup";
import FaSearchIcon from "../image/search.svg";
import CustomFilterIcon from "../image/Filters lines.svg";
import bar from "../image/bar.svg";
import keys from "../image/keys.svg";
function ServiceRiskReport() {
  const [filteredData, setFilteredData] = useState([]);

  const [isBlinking, setIsBlinking] = useState(false);
  const [search, setSearch] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const medicineData = [
    {
      name: "Concerta ER 54mg 24cnt 30s AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [53, 46, 39, 32, 25, 18, 73, 66, 58, 63, 54, 78, 71, 63],
    },
    {
      name: "Concerta ER 18mg 24cnt 30s AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [
        81, 74, 108, 101, 135, 128, 121, 114, 107, 100, 134, 127, 120, 113,
      ],
    },
    {
      name: "Topamax 50mg 60 Sprinkle Caps AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [
        177, 170, 163, 156, 149, 142, 135, 128, 121, 170, 172, 165, 158, 151,
      ],
    },
    {
      name: "Invega Trinza 1x525mg SYR AUS-NZ",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [
        651, 644, 637, 630, 623, 616, 609, 602, 595, 588, 581, 574, 567, 560,
      ],
    },
    {
      name: "Eprex Protecs 20000U 6x0 5ml SYR AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [71, 64, 57, 51, 43, 50, 42, 50, 51, 63, 56, 49, 41, 35],
    },
    {
      name: "Eprex Protecs 30000U 6x0 3ml SYR AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [80, 73, 66, 59, 52, 44, 70, 63, 56, 70, 63, 56, 50, 41],
    },
    {
      name: "Eprex Protecs 80000U 6x0 8ml SYR AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [60, 53, 46, 72, 65, 58, 50, 47, 53, 64, 57, 49, 43, 37],
    },
    {
      name: "Imbruvica 560mg 30Tab AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: "Cello Protecs 80000U 6x0 8ml SYR AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [60, 53, 46, 72, 65, 58, 50, 47, 53, 64, 57, 49, 43, 37],
    },
    {
      name: "Dolo 560mg 30Tab AUS",
      dates: [
        "04 Sep",
        "11 Sep",
        "18 Sep",
        "25 Sep",
        "02 Oct",
        "09 Oct",
        "16 Oct",
        "23 Oct",
        "30 Oct",
        "06 Nov",
        "13 Nov",
        "20 Nov",
        "27 Nov",
        "04 Dec",
      ],
      additionalData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ];

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredData(medicineData); 
    }
  }, [search, medicineData]);

  const handleVoiceInput = () => {
    setShowPopup(true);
    setIsBlinking(!isBlinking);
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript;
        setSearch(speechToText);

        
        filterData(speechToText);
        setShowPopup(false);
      };
      recognition.start();
    } else {
      console.error("Speech recognition is not supported in this browser.");
    }
  };
  



  const extractFilterKeyword = (input) => {
    const keywords = [
      "equal or below 0",
      "min target",
      "min-target",
      "target max",
      "target-max",
      "above max",
      "above-max",
      "below zero",
      "zero to min",
      "zero",
    ];
    const inputLowerCase = input.toLowerCase();
    return keywords.find((keyword) => inputLowerCase.includes(keyword));
  };

  const filterData = (searchValue) => {
    const lowerSearchValue = searchValue.toLowerCase();
    let filteredResults = [];

    if (lowerSearchValue === "") {
      filteredResults = [...medicineData]; // Show all data if input is empty
    } else {
      filteredResults = medicineData.map((medicine) => {
        const newData = medicine.additionalData.map((data) => {
          if (
            (lowerSearchValue === "above max" && data > 100) ||
            (lowerSearchValue === "target max" && data >= 59 && data <= 99) ||
            (lowerSearchValue === "min target" && data >= 26 && data <= 58) ||
            (lowerSearchValue === "zero to min" && data >= 1 && data <= 25) ||
            (lowerSearchValue === "below zero" && data === 0)
          ) {
            return data;
          }
          return null;
        });

        return { ...medicine, additionalData: newData };
      });
    }

    setFilteredData(filteredResults);
  };

  // const handleSearchSubmit = () => {
  //   const filterKeyword = extractFilterKeyword(search);
  //   if (filterKeyword) {
  //     filterData(filterKeyword);
  //   }
  // };

  const handleButtonClick = () => {
    const filterKeyword = extractFilterKeyword(search);
    if (filterKeyword) {
      filterData(filterKeyword);
    }
  };

  
const handleSearchInputChange = (event) => {
  const inputValue = event.target.value;
  setSearch(inputValue);

  // Filter the data based on the input value
  const filteredResults = medicineData.filter((medicine) =>
    medicine.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  setFilteredData(filteredResults);
};

  return (
    <>
      <div className="service-risk-report">
        <div className="filters">
          <img
            src={CustomFilterIcon}
            alt="Custom Filter"
            className="filtericon"
          />
          <p className="filter-text">Filters</p>
        </div>
        <div className="search">
  <div className="search-input-container">
    <div className="search-icon">
      <img src={FaSearchIcon} alt="Search" />
    </div>
    <input 
      type="text" 
      placeholder="Search" 
      className="search-input"
      value={search}
      onChange={handleSearchInputChange} 
    />
  </div>
  <button 
    className="go-button"
    
  >
    Go
  </button>
</div>
        <div className="dropdowns">
          <select className="dropdown-a">
            <option value="AUS">AUS</option>
            <option value="AUS">ENG</option>
            <option value="AUS">IND</option>
          </select>
          <select className="dropdown-b">
            <option value="Week">Week</option>
            <option value="Week">SUN</option>
            <option value="Week">MON</option>
          </select>
        </div>
        <div className="date-range">
          <p>
            2023-09-04{" "}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginRight: "4px",
              }}
            >
              <AiOutlineSwapRight />
            </span>
            2023-12-05
          </p>
        </div>
        <img src={bar} alt="bar" className="bar" />
        <button className="red-button">1 USD = 7 RMB</button>
      </div>
      <div className="serviceRiskReport-container">
        <table className="serviceRiskReport-table">
          <thead>
            <tr>
              <th className="grey-heading-border">Medicine</th>
              {medicineData[0].dates.map((date, index) => (
                <th key={index} className="grey-heading-border">
                  {date}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {search && filteredData.length === 0 ? (
              <tr>
                <td
                  colSpan={medicineData[0].dates.length + 1}
                  className="no-results"
                >
                  No results found
                </td>
              </tr>
            ) : (
              filteredData.map((medicine, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "white-row" : "light-grey-row"}
                >
                  <td className="bold-text border medicine-name">
                    <input type="checkbox" /> {medicine.name}
                  </td>
                  {medicine.additionalData.map((data, index) => (
                    <td key={index} className="border">
                      <span
                        style={{
                          color:
                            data >= 0 && data <= 1
                              ? "red"
                              : data >= 2 && data <= 25
                              ? "orange"
                              : data > 26 && data <= 58
                              ? "#FDD201"
                              : data > 59 && data < 100
                              ? "#07DA01"
                              : data >= 100
                              ? "blue"
                              : "",
                        }}
                      >
                        {data}
                      </span>
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <img src={keys} alt="key-value" className="key-value" />
      <div className="pagination">
        <button className="previous-btn">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginRight: "2px",
            }}
          >
            <AiOutlineArrowLeft style={{ marginRight: "5px" }} />
            Previous
          </span>
        </button>
        <div className="pagenumber">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>...</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
        </div>

        <button className="next-btn">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginRight: "2px",
            }}
          >
            <AiOutlineArrowRight style={{ marginRight: "5px" }} />
            Next
          </span>
        </button>
      </div>

      <div className="container">
        <img
          className="image"
          src={speach}
          alt="An image"
          onClick={handleVoiceInput}
        />
        <input
          type="text"
          placeholder="Type your message..."
          className="input-field"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className="submit-button" onClick={handleButtonClick}>
          Submit
        </button>
        {showPopup && (
          <div className="voice-popup">
            <VoicePopup onClose={() => setShowPopup(false)} />
          </div>
        )}
      </div>
    </>
  );
}

export default ServiceRiskReport;

//===========================================================>>>>>>>>>>>>>>>>



//==============================================================>>>
// import React, { useState, useEffect } from "react";
// import "../styles/ServiceRiskReport.css"; // Import the CSS file
// import speach from "../image/speach.png";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import { AiOutlineSwapRight } from "react-icons/ai";
// import VoicePopup from "./VoicePopup";
// import FaSearchIcon from "../image/search.svg";
// import CustomFilterIcon from "../image/Filters lines.svg";
// import bar from "../image/bar.svg";
// import keys from "../image/keys.svg";
// function ServiceRiskReport() {
//   const [filteredData, setFilteredData] = useState([]);

//   const [isBlinking, setIsBlinking] = useState(false);
//   const [search, setSearch] = useState("");

//   const [showPopup, setShowPopup] = useState(false);
//   const medicineData = [
//     {
//       name: "Concerta ER 54mg 24cnt 30s AUS",
//       dates: [
//         "04 Sep",
//         "11 Sep",
//         "18 Sep",
//         "25 Sep",
//         "02 Oct",
//         "09 Oct",
//         "16 Oct",
//         "23 Oct",
//         "30 Oct",
//         "06 Nov",
//         "13 Nov",
//         "20 Nov",
//         "27 Nov",
//         "04 Dec",
//       ],
//       additionalData: [53, 46, 39, 32, 25, 18, 73, 66, 58, 63, 54, 78, 71, 63],
//     },
//     {
//       name: "Concerta ER 18mg 24cnt 30s AUS",
//       dates: [
//         "04 Sep",
//         "11 Sep",
//         "18 Sep",
//         "25 Sep",
//         "02 Oct",
//         "09 Oct",
//         "16 Oct",
//         "23 Oct",
//         "30 Oct",
//         "06 Nov",
//         "13 Nov",
//         "20 Nov",
//         "27 Nov",
//         "04 Dec",
//       ],
//       additionalData: [
//         81, 74, 108, 101, 135, 128, 121, 114, 107, 100, 134, 127, 120, 113,
//       ],
//     },
//     {
//       name: "Topamax 50mg 60 Sprinkle Caps AUS",
//       dates: [
//         "04 Sep",
//         "11 Sep",
//         "18 Sep",
//         "25 Sep",
//         "02 Oct",
//         "09 Oct",
//         "16 Oct",
//         "23 Oct",
//         "30 Oct",
//         "06 Nov",
//         "13 Nov",
//         "20 Nov",
//         "27 Nov",
//         "04 Dec",
//       ],
//       additionalData: [
//         177, 170, 163, 156, 149, 142, 135, 128, 121, 170, 172, 165, 158, 151,
//       ],
//     },
//     {
//       name: "Invega Trinza 1x525mg SYR AUS-NZ",
//       dates: [
//         "04 Sep",
//         "11 Sep",
//         "18 Sep",
//         "25 Sep",
//         "02 Oct",
//         "09 Oct",
//         "16 Oct",
//         "23 Oct",
//         "30 Oct",
//         "06 Nov",
//         "13 Nov",
//         "20 Nov",
//         "27 Nov",
//         "04 Dec",
//       ],
//       additionalData: [
//         651, 644, 637, 630, 623, 616, 609, 602, 595, 588, 581, 574, 567, 560,
//       ],
//     },
//     {
//       name: "Eprex Protecs 20000U 6x0 5ml SYR AUS",
//       dates: [
//         "04 Sep",
//         "11 Sep",
//         "18 Sep",
//         "25 Sep",
//         "02 Oct",
//         "09 Oct",
//         "16 Oct",
//         "23 Oct",
//         "30 Oct",
//         "06 Nov",
//         "13 Nov",
//         "20 Nov",
//         "27 Nov",
//         "04 Dec",
//       ],
//       additionalData: [71, 64, 57, 51, 43, 50, 42, 50, 51, 63, 56, 49, 41, 35],
//     },
//     {
//       name: "Eprex Protecs 30000U 6x0 3ml SYR AUS",
//       dates: [
//         "04 Sep",
//         "11 Sep",
//         "18 Sep",
//         "25 Sep",
//         "02 Oct",
//         "09 Oct",
//         "16 Oct",
//         "23 Oct",
//         "30 Oct",
//         "06 Nov",
//         "13 Nov",
//         "20 Nov",
//         "27 Nov",
//         "04 Dec",
//       ],
//       additionalData: [80, 73, 66, 59, 52, 44, 70, 63, 56, 70, 63, 56, 50, 41],
//     },
//     {
//       name: "Eprex Protecs 80000U 6x0 8ml SYR AUS",
//       dates: [
//         "04 Sep",
//         "11 Sep",
//         "18 Sep",
//         "25 Sep",
//         "02 Oct",
//         "09 Oct",
//         "16 Oct",
//         "23 Oct",
//         "30 Oct",
//         "06 Nov",
//         "13 Nov",
//         "20 Nov",
//         "27 Nov",
//         "04 Dec",
//       ],
//       additionalData: [60, 53, 46, 72, 65, 58, 50, 47, 53, 64, 57, 49, 43, 37],
//     },
//     {
//       name: "Imbruvica 560mg 30Tab AUS",
//       dates: [
//         "04 Sep",
//         "11 Sep",
//         "18 Sep",
//         "25 Sep",
//         "02 Oct",
//         "09 Oct",
//         "16 Oct",
//         "23 Oct",
//         "30 Oct",
//         "06 Nov",
//         "13 Nov",
//         "20 Nov",
//         "27 Nov",
//         "04 Dec",
//       ],
//       additionalData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     },
//   ];

//   useEffect(() => {
//     if (search.trim() === "") {
//       setFilteredData(medicineData); // Set back to original data if search is empty
//     }
//   }, [search, medicineData]);

//   const handleVoiceInput = () => {
//     setShowPopup(true);
//     setIsBlinking(!isBlinking);
//     if ("webkitSpeechRecognition" in window) {
//       const recognition = new window.webkitSpeechRecognition();
//       recognition.onresult = (event) => {
//         const speechToText = event.results[0][0].transcript;
//         setSearch(speechToText);

//         // Pass the filter keyword directly to filterData function
//         filterData(speechToText);
//         setShowPopup(false);
//       };
//       recognition.start();
//     } else {
//       console.error("Speech recognition is not supported in this browser.");
//     }
//   };

//   const extractFilterKeyword = (input) => {
//     const keywords = [
//       "equal or below 0",
//       "min target",
//       "min-target",
//       "target max",
//       "target-max",
//       "above max",
//       "above-max",
//       "below zero",
//       "zero to min",
//       "zero",
//     ];
//     const inputLowerCase = input.toLowerCase();
//     return keywords.find((keyword) => inputLowerCase.includes(keyword));
//   };

//   const filterData = (searchValue) => {
//     const lowerSearchValue = searchValue.toLowerCase();
//     let filteredResults = [];

//     if (lowerSearchValue === "") {
//       filteredResults = [...medicineData]; // Show all data if input is empty
//     } else {
//       filteredResults = medicineData.map((medicine) => {
//         const newData = medicine.additionalData.map((data) => {
//           if (
//             (lowerSearchValue === "above max" && data > 100) ||
//             (lowerSearchValue === "target max" && data >= 59 && data <= 99) ||
//             (lowerSearchValue === "min target" && data >= 26 && data <= 58) ||
//             (lowerSearchValue === "zero to min" && data >= 1 && data <= 25) ||
//             (lowerSearchValue === "below zero" && data === 0)
//           ) {
//             return data;
//           }
//           return null;
//         });

//         return { ...medicine, additionalData: newData };
//       });
//     }

//     setFilteredData(filteredResults);
//   };

//   const handleSearchSubmit = () => {
//     const filterKeyword = extractFilterKeyword(search);
//     if (filterKeyword) {
//       filterData(filterKeyword);
//     }
//   };

//   const handleButtonClick = () => {
//     const filterKeyword = extractFilterKeyword(search);
//     if (filterKeyword) {
//       filterData(filterKeyword);
//     }
//   };

//   return (
//     <>
//       <div className="service-risk-report">
//         <div className="filters">
//           <img
//             src={CustomFilterIcon}
//             alt="Custom Filter"
//             className="filtericon"
//           />
//           <p className="filter-text">Filters</p>
//         </div>
//         <div className="search">
//           <div className="search-input-container">
//             <div className="search-icon">
//               <img src={FaSearchIcon} alt="Search" />
//             </div>
//             <input type="text" placeholder="Search" className="search-input" />
//           </div>
//           <button className="go-button">Go</button>
//         </div>
//         <div className="dropdowns">
//           <select className="dropdown-a">
//             <option value="AUS">AUS</option>
//             <option value="AUS">ENG</option>
//             <option value="AUS">IND</option>
//           </select>
//           <select className="dropdown-b">
//             <option value="Week">Week</option>
//             <option value="Week">SUN</option>
//             <option value="Week">MON</option>
//           </select>
//         </div>
//         <div className="date-range">
//           <p>
//             2023-09-04{" "}
//             <span
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 marginRight: "4px",
//               }}
//             >
//               <AiOutlineSwapRight />
//             </span>
//             2023-12-05
//           </p>
//         </div>
//         <img src={bar} alt="bar" className="bar" />
//         <button className="red-button">1 USD = 7 RMB</button>
//       </div>
//       <div className="serviceRiskReport-container">
//         <table className="serviceRiskReport-table">
//           <thead>
//             <tr>
//               <th className="grey-heading-border">Medicine</th>
//               {medicineData[0].dates.map((date, index) => (
//                 <th key={index} className="grey-heading-border">
//                   {date}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {search && filteredData.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan={medicineData[0].dates.length + 1}
//                   className="no-results"
//                 >
//                   No results found
//                 </td>
//               </tr>
//             ) : (
//               filteredData.map((medicine, index) => (
//                 <tr
//                   key={index}
//                   className={index % 2 === 0 ? "white-row" : "light-grey-row"}
//                 >
//                   <td className="bold-text border medicine-name">
//                     <input type="checkbox" /> {medicine.name}
//                   </td>
//                   {medicine.additionalData.map((data, index) => (
//                     <td key={index} className="border">
//                       <span
//                         style={{
//                           color:
//                             data >= 0 && data <= 1
//                               ? "red"
//                               : data >= 2 && data <= 25
//                               ? "orange"
//                               : data > 26 && data <= 58
//                               ? "#FDD201"
//                               : data > 59 && data < 100
//                               ? "#07DA01"
//                               : data >= 100
//                               ? "blue"
//                               : "",
//                         }}
//                       >
//                         {data}
//                       </span>
//                     </td>
//                   ))}
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//       <img src={keys} alt="key-value" className="key-value" />
//       <div className="pagination">
//         <button className="previous-btn">
//           <span
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               marginRight: "2px",
//             }}
//           >
//             <AiOutlineArrowLeft style={{ marginRight: "5px" }} />
//             Previous
//           </span>
//         </button>
//         <div className="pagenumber">
//           <p>1</p>
//           <p>2</p>
//           <p>3</p>
//           <p>...</p>
//           <p>8</p>
//           <p>9</p>
//           <p>10</p>
//         </div>

//         <button className="next-btn">
//           <span
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               marginRight: "2px",
//             }}
//           >
//             <AiOutlineArrowRight style={{ marginRight: "5px" }} />
//             Next
//           </span>
//         </button>
//       </div>

//       <div className="container">
//         <img
//           className="image"
//           src={speach}
//           alt="An image"
//           onClick={handleVoiceInput}
//         />
//         <input
//           type="text"
//           placeholder="Type your message..."
//           className="input-field"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button className="submit-button" onClick={handleButtonClick}>
//           Submit
//         </button>
//         {showPopup && (
//           <div className="voice-popup">
//             <VoicePopup onClose={() => setShowPopup(false)} />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default ServiceRiskReport;

// //===========================================================>>>>>>>>>>>>>>>>
