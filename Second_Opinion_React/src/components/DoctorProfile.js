import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/profile-pic.css';
import VerticalNavBar from './VerticalNavBar';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const DoctorProfile = () => {
    const naviagte = useNavigate();
    const id = sessionStorage.getItem("id");
    const doctorData = useLocation();
    const [email, setEmail] = useState('');
    // State variables to store profile data
    const [profileData, setProfileData] = useState({
        name: '',
        email: email,
        licenseExpiry: '2024-01-01',
        licenseNo: '',
        yearsOfExperience: '',
        photo: '/profile-icon.png',
        address: {
            street: '',
            city: '',
            state: '',
            country: '',
            zipcode: '',
            region: ''
        },
        qualification: {
            name: '',
            university: '',
            document: null
        },
        languagesSpoken: [],
        specialization: '1'
    });

    useEffect(() => {
        if (id != null) {
            axios.get("http://localhost:8080/doctor/" + id).then(response => {
                setProfileData(response?.data?.data);
                setProfileData((prevData) => ({
                    ...prevData,
                    "specialization": response?.data?.data?.specialization?.id,
                }));
            });
            axios.get("http://localhost:8080/user/" + id).then(response => {
                setEmail(response?.data?.data?.userName);
            });
        }
        else {
            setEmail(doctorData?.state?.data?.userName);
        }
    }, [])

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        if (checked) {
            setProfileData((prevData) => ({
                ...prevData,
                languagesSpoken: [...prevData.languagesSpoken, { id }]
            }));
        } else {
            setProfileData((prevData) => ({
                ...prevData,
                languagesSpoken: prevData.languagesSpoken.filter(item => item.id !== id)
            }));
        }
    };

    // Function to handle changes in profile data
    const handleProfileDataChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAdressChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            address: { ...prevData.address, [name]: value }
        }));

        if (name === 'zipcode') {
            fetchLocationDetails(value)
                .then(location => {
                    setProfileData(prevData => ({
                        ...prevData,
                        address: {
                            ...prevData.address, city: location.city,
                            state: location.state,
                            country: location.country
                        }

                    }));
                })
                .catch(error => {

                });
        }
    }
    const handleQualificationChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            qualification: { ...prevData.qualification, [name]: value }
        }));

    }


    //function to get Location details
    async function fetchLocationDetails(pincode) {
        const apiUrl = `https://api.postalpincode.in/pincode/${pincode}`;

        const response = await fetch(apiUrl);
        const data = await response?.json();
        if (data && data?.length > 0 && data[0].PostOffice && data[0].PostOffice.length > 0) {
            const location = data[0].PostOffice[0];
            return {
                city: location.Division,
                state: location.State,
                country: location.Country
            };
        } else {
            throw new Error('Location not found');
        }
    }

    // Function to handle profile data submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = {
            name: profileData.name,
            email: profileData.email,
            licenseExpiry: profileData.licenseExpiry,
            licenseNo: profileData.licenseNo,
            yearsOfExperience: profileData.yearsOfExperience,
            languages: profileData.languagesSpoken.map(language => language.id),
            specializationId: profileData.specialization,
            photo: profileData.photo,
            address: profileData.address,
            qualification: profileData.qualification,

        };
        console.log(postData);
        if (id == null) {
            axios.post('http://localhost:8080/doctor/profile?id=' + doctorData?.state?.data?.id, postData)
                .then(response => {
                    sessionStorage.setItem("id", doctorData?.state?.data?.id)
                    naviagte("/doctor/dashboard", { state: { data: doctorData } });
                });
        }
        else {
            axios.put('http://localhost:8080/doctor/' + id, postData)
                .then(response => {
                    naviagte("/doctor/dashboard", { state: { data: doctorData } });
                });
        }


    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfileData((prevData) => ({
                ...prevData,
                photo: reader.result,
            }));
        };
        reader.readAsDataURL(file);
    };

    return (
        <>
            <Header />
            <div style={{ display: "flex" }} >
                <VerticalNavBar />
                <div className="container">

                    <form onSubmit={handleSubmit}>

                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <div className='d-flex flex-column '>
                                    <h2 className='text-muted'>My Profile</h2>
                                    <br></br>
                                    <br></br>
                                    <label htmlFor="fullName" className="form-label p-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control p-2 align-self-end"
                                        id="name"
                                        name="name"
                                        value={profileData.name}
                                        onChange={handleProfileDataChange}
                                    />

                                </div>

                            </div>

                            <div className="col-md-6 profile-pic">
                                <label className="-label" htmlFor="photo">
                                    <span className="glyphicon glyphicon-camera"></span>
                                    <span>Change Image</span>
                                </label>
                                <input id="photo" type="file" onChange={handleFileChange} />
                                <img src={profileData.photo} id="output" width="200" alt="Profile" />
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleProfileDataChange}
                                    readOnly // Prevents editing email
                                />
                            </div>

                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-4">
                                <label htmlFor="licenseNo" className="form-label">License No</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="licenseNo"
                                    name="licenseNo"
                                    value={profileData.licenseNo}
                                    onChange={handleProfileDataChange}
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="licenseExpiry" className="form-label">License Expiry</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="licenseExpiry"
                                    name="licenseExpiry"
                                    value={profileData.licenseExpiry}
                                    onChange={handleProfileDataChange}
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="yearsOfExperience" className="form-label">Years of Experience</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="yearsOfExperience"
                                    name="yearsOfExperience"
                                    value={profileData.yearsOfExperience}
                                    onChange={handleProfileDataChange}
                                />

                            </div>
                            <div className="col-md-4" style={{ paddingTop: '2%' }}>
                                <label htmlFor="specialization" className="form-label">Specialization</label>
                                <select
                                    className="form-select"
                                    id="specialization"
                                    name="specialization"
                                    value={profileData.specialization}
                                    onChange={handleProfileDataChange}
                                >
                                    <option value="1">Oncology</option>
                                    <option value="2">Cardiology</option>
                                    <option value="3">Dermatology</option>
                                    <option value="4">Endocrinology</option>
                                    <option value="5">Gastroentrology</option>
                                    <option value="6">Hematology</option>
                                </select>
                            </div>


                            <div className='col-md-12' style={{ paddingBottom: '2%', paddingTop: '2%' }}>
                                <span>Languages Spoken  </span>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" data-label="English" type="checkbox" id="1" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="1">English</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" data-label="Hindi" type="checkbox" id="2" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="2">Hindi</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" data-label="Marathi" type="checkbox" id="3" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="3">Marathi</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" data-label="Gujrati" type="checkbox" id="4" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="4">Gujrati</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" data-label="French" type="checkbox" id="5" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="5">French</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" data-label="German" type="checkbox" id="6" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="6">German</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" data-label="Chinese" type="checkbox" id="7" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="7">Chinese</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" data-label="Japanese" type="checkbox" id="8" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="8">Japanese</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" data-label="Russian" type="checkbox" id="9" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="9">Russian</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" data-label="Telgu" type="checkbox" id="10" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="10">Telgu</label>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="street" className="form-label">Street </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="street"
                                    name="street"
                                    value={profileData.address.street}
                                    onChange={handleAdressChange}
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="city" className="form-label">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    value={profileData.address.city}
                                    onChange={handleAdressChange}
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label">State</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="state"
                                    name="state"
                                    value={profileData.address.state}
                                    onChange={handleAdressChange}
                                />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select
                                    className="form-control"
                                    id="country"
                                    name="country"
                                    value={profileData.address.country}
                                    onChange={handleProfileDataChange}
                                >
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antartica">Antarctica</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Bouvet Island">Bouvet Island</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Congo">Congo, the Democratic Republic of the</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                                    <option value="Croatia">Croatia (Hrvatska)</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="East Timor">East Timor</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="France Metropolitan">France, Metropolitan</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern Territories">French Southern Territories</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                                    <option value="Holy See">Holy See (Vatican City State)</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran">Iran (Islamic Republic of)</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                                    <option value="Korea">Korea, Republic of</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Lao">Lao People's Democratic Republic</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon" selected>Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macau">Macau</option>
                                    <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia">Micronesia, Federated States of</option>
                                    <option value="Moldova">Moldova, Republic of</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Pitcairn">Pitcairn</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russian Federation</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint LUCIA">Saint LUCIA</option>
                                    <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia (Slovak Republic)</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                                    <option value="Span">Spain</option>
                                    <option value="SriLanka">Sri Lanka</option>
                                    <option value="St. Helena">St. Helena</option>
                                    <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syrian Arab Republic</option>
                                    <option value="Taiwan">Taiwan, Province of China</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania, United Republic of</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks and Caicos">Turks and Caicos Islands</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Viet Nam</option>
                                    <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                    <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                                    <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                                    <option value="Western Sahara">Western Sahara</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="zipcode" className="form-label">Pin Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="zipcode"
                                    name="zipcode"
                                    value={profileData.address.zipcode}
                                    onChange={handleAdressChange}
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="region" className="form-label">Region</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="region"
                                    name="region"
                                    value={profileData.address.region}
                                    onChange={handleAdressChange}
                                />
                            </div>
                        </div>


                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">Qualification</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={profileData.qualification.name}
                                    onChange={handleQualificationChange}

                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="university" className="form-label">University</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="university"
                                    name="university"
                                    value={profileData.qualification.university}
                                    onChange={handleQualificationChange}

                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="document" className="form-label">Upload Documents</label>
                            <input className="form-control" type="file" id="document" value={profileData.qualification.document} onChange={handleQualificationChange} multiple />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Save Changes</button>
                        <br></br>
                        <br></br>
                    </form>
                </div >
            </div >
            <Footer />
        </>
    );
};


export default DoctorProfile;
