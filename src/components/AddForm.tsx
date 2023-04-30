import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

const initialValues = {
    business: "",
    description: "",
    category: "",
    address: "",
    website: "",
    image: ""
};

const data = [
    { value: 1, label: "Restaurant" },
    { value: 2, label: "Arts and Entertainment" },
    { value: 3, label: "Health and Wellness" },
    { value: 4, label: "Retail" },
    { value: 5, label: "Creative Services" },
    { value: 6, label: "Black Owned" },
    { value: 7, label: "Women Owned" },
    { value: 8, label: "LGBTQ+ Options" }
];

export default function FormAdd(): JSX.Element {
    const [values, setValues] = useState(initialValues);
    //const [selectedCategory, setCategory] = useState([]);

    const handleInputChange = (event: {
        target: { name: string; value: string };
    }) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const [optionList] = useState(data);

    return (
        <form>
            <div className="form">
                <label>
                    Business Name:
                    <input
                        value={values.business}
                        onChange={handleInputChange}
                        name="business"
                    />
                </label>
            </div>
            <div className="form">
                <label>
                    Description:
                    <input
                        value={values.description}
                        onChange={handleInputChange}
                        name="description"
                    />
                </label>
            </div>
            <div className="form">
                <label>
                    Category:
                    <Multiselect
                        options={optionList}
                        displayValue="label"
                    ></Multiselect>
                </label>
            </div>
            <div className="form">
                <label>
                    Address:
                    <input
                        value={values.address}
                        onChange={handleInputChange}
                        name="address"
                    />
                </label>
            </div>
            <div className="form">
                <label>
                    Website URL:
                    <input
                        value={values.website}
                        onChange={handleInputChange}
                        name="website"
                    />
                </label>
            </div>
            <div className="form">
                <label>
                    Image URL:
                    <input
                        value={values.website}
                        onChange={handleInputChange}
                        name="image"
                    />
                </label>
            </div>
            <button type="submit"> Submit </button>
        </form>
    );
}
