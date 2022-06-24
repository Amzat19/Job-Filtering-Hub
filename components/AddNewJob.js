import Link from "next/link";
import { useState } from "react";
import { useDispatch } from  "react-redux";
import { createJob } from "../reducers/jobSlice";
import Router from "next/router";

const AddNewJob = () => {
    const initialState = {
        company: "",
        logo: "",
        new: true,
        featured: true,
        position: "",
        role: "",
        level: "",
        postedAt: "",
        contract: "",
        location: "",
        languages: [],
        tools: []
    }
    const [values, setValues] = useState(initialState);

    const handleInputValue = (e) => {
        let { value, name} = e.target;
        
        setValues({
            ...values,
            [name]: value,
        })
    };

    const handleCheckboxValue = (e) => {
        const { value, checked, name } = e.target;
        console.log(name)
        if(checked){
            setValues({
                ...values,
                [name]: [...values[name], value]
            })
        }
        else {
            setValues({
                ...values,
              [name]: values[name].filter((e) => e !== value)
            })
          }
    }

    const handleRadioValue = (e) => {
        const { value, name } = e.target;
        const currVal = value === 'true' ? true : false;

        setValues({
            ...values,
            [name]: currVal
        })
    }

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createJob(values));

        clear();

        Router.push('/');
    }

    const handleImage = async (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        const base64 = await convertBase64(file);

        setValues({
         ...values,
         [name] : base64
        })
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }

    const clear = () => {
        setValues(initialState);
    }

    console.log(values);

    return (
        <section className="pb-6">
            <button className="bg-white right-1 uppercase text-lg text-dDarkCyan px-4 py-3 rounded-md ml-[10vw] mt-4 hover:bg-dDarkCyan hover:text-white">
                <Link href="/">
                <a>See Job listings</a>
                </Link>
            </button>
            <form className="bg-dDarkCyan w-4/5 m-auto mt-6 rounded-md mb-3" onSubmit={handleSubmit}>
                <fieldset className="grid">
                    <legend className="text-xl text-center pb-6 pt-6 text-white">Create a New Job Offer</legend>
                    <label className="text-xl mb-3 m-auto w-4/5 font-medium grid">
                        Company Name   
                        <input type='text'
                         id="company" 
                         name="company"
                         className="rounded-md px-2 py-2 border-cyanBg text-lg" 
                         placeholder="Amzat Logistics" 
                         value={values.company} 
                         onChange={handleInputValue}
                         required/>
                    </label>
                    <label className="text-xl mb-3 m-auto w-4/5 font-medium grid">
                        Logo/Image
                        <input
                         type='file'
                         name="logo"
                         id="logo"
                         accept=".jpg, .jpeg, .png, .svg"
                         className="flex justify-center text-sm"
                         onChange={handleImage}
                         required/>
                    </label>
                    <label className="text-xl mb-3 m-auto w-4/5 font-medium grid">
                        Is this a new Job Offer?
                        <p className="text-md"><input 
                            type='radio'
                            id="yes-new"
                            name="new"
                            value='true'
                            onChange={handleRadioValue}
                            checked={values.new === true}/>Yes</p>
                        <p className="text-md"><input 
                           type='radio'
                           id="no-new" 
                           name="new"
                           value='false'
                           onChange={handleRadioValue}
                           checked={values.new === false}/>No</p>
                    </label>
                    <label className="text-xl mb-3 m-auto w-4/5 font-medium grid">
                        Is this Job featured?
                        <p className="text-md"><input 
                        type="radio" 
                        id="yes-featured" 
                        name="featured"
                        value='true'
                        onChange={handleRadioValue}
                        checked={values.featured === true}/>Yes</p>
                        <p className="text-md"><input 
                        type="radio" 
                        id="no-featured"
                        name="featured"
                        value='false'
                        onChange={handleRadioValue}
                        checked={values.featured === false}/>No</p>
                    </label>
                    <label className="text-xl mb-3 m-auto w-4/5 font-medium grid">
                        Job position:
                        <input
                        type="text" 
                        id="position" 
                        name="position" 
                        className="rounded-md px-2 py-2 border-cyanBg text-lg"
                        placeholder="E.g Senior FrontEnd Developer"
                        value={values.position}
                        onChange={handleInputValue}
                        required/>
                    </label>
                    <label className="text-xl mb-3 m-auto w-4/5 font-medium grid">
                        Role
                        <select name="role" id="role" value={values.role} onChange={handleInputValue} className="w-2/3 rounded-md px-2 py-2 md:w-1/3" required>
                            <option className="text-white" value=''>Select role...</option>
                            <option value='Frontend'>Frontend</option>
                            <option value='Fullstack'>Fullstack</option>
                            <option value='Backend'>Backend</option>
                        </select>
                    </label>
                    <label  className="text-xl mb-3 m-auto w-4/5 font-medium grid">
                        Level
                        <select name="level" id="level" value={values.level} onChange={handleInputValue} className="w-2/3 rounded-md px-2 py-2 md:1/3" required>
                            <option className="text-white" value=''>Select level...</option>
                            <option value='Senior'>Senior</option>
                            <option value='Midweight'>Midweight</option>
                            <option value='Junior'>Junior</option>
                        </select>
                    </label>
                    <label className="text-xl mb-3 m-auto w-4/5 font-medium grid">
                        When was it posted ?
                        <input 
                        type="text" 
                        name="postedAt" 
                        id="postedAt" 
                        maxLength={7}
                        className="rounded-md px-2 py-2 border-cyanBg text-lg md:w-2/3"
                        placeholder="E.g 1d ago / 1w ago / 1mo ago"
                        value={values.postedAt}
                        onChange={handleInputValue}
                        required/>
                    </label>
                    <label className="text-xl mb-3 m-auto w-4/5 font-medium grid">
                        Type of Job / contract
                        <select name="contract" id="contract" value={values.contract} onChange={handleInputValue} className="w-2/3 rounded-md px-2 py-2 md:w-1/3">
                            <option className="text-white" value=''>Select contract...</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                        </select>
                    </label>
                    <label className="text-xl mb-3 m-auto font-medium grid w-4/5">
                        Location
                        <input 
                        type="text" 
                        name="location" 
                        id="location" 
                        className="rounded-md px-2 py-2 border-cyanBg text-lg md:w-2/3"
                        placeholder="E.g US only / WorldWide / Remote"
                        value={values.location}
                        onChange={handleInputValue}
                        required/>
                    </label>
                    <label className="text-xl mb-3 m-auto w-4/5 font-medium grid">
                        Languages / Your Stack
                        <p><input type="checkbox" name="languages" id="lang-html" value='HTML' onChange={handleCheckboxValue}/>HTML</p>
                        <p><input type="checkbox" name="languages" id="lang-css" value='CSS' onChange={handleCheckboxValue}/>CSS</p>
                        <p><input type="checkbox" name="languages" id="lang-js" value='JavaScript' onChange={handleCheckboxValue}/>JavaScript</p>
                        <p><input type="checkbox" name="languages" id="lang-python" value='Python' onChange={handleCheckboxValue}/>Python</p>
                        <p><input type="checkbox" name="languages" id="lang-ruby" value='Ruby' onChange={handleCheckboxValue}/>Ruby</p>
                    </label>
                    <label className="text-xl mb-3 m-auto w-4/5 font-medium grid">
                        Tools
                        <p><input type="checkbox" name="tools" id="tools-react" value='React' onChange={handleCheckboxValue}/>React</p>
                        <p><input type="checkbox" name="tools" id="tools-sass" value='Sass' onChange={handleCheckboxValue}/>Sass</p>
                        <p><input type="checkbox" name="tools" id="tools-django" value='Django' onChange={handleCheckboxValue}/>Django</p>
                        <p><input type="checkbox" name="tools" id="tools-vue" value='Vue' onChange={handleCheckboxValue}/>Vue</p>
                        <p><input type="checkbox" name="tools" id="tools-ror" value='RoR' onChange={handleCheckboxValue}/>RoR</p>
                        <p><input type="checkbox" name="tools" id="tools-ruby" value='Ruby' onChange={handleCheckboxValue}/>Ruby</p>
                    </label>

                    <button type="submit" className="text-xl text mb-3 mt-3 m-auto w-4/5 h-12 rounded-md bg-cyanBg hover:bg-cyanDark">Add New Job</button>
                </fieldset>
            </form>
        </section>
        
    )
}

export default AddNewJob;