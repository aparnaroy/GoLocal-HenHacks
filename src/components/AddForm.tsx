import React from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { useSessionStorage } from "../hooks/useSessionStorage";

const initialValues = {
    business: "",
    description: "",
    category: [] as string[],
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
    //const [values, setValues] = useState(initialValues);
    const [businesses, setBusinesses] = useSessionStorage<typeof initialValues>(
        "businesses",
        initialValues
    );

    const handleInputChange = (event: {
        target: { name: string; value: string };
    }) => {
        const { name, value } = event.target;
        setBusinesses({
            ...businesses,
            [name]: value
        });
    };

    const handleCategoryChange = (selectedList: { label: string }[]) => {
        setBusinesses({
            ...businesses,
            category: selectedList.map((item) => item.label)
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setBusinesses(initialValues);
    };

    const optionList = data;

    return (
        <form onSubmit={handleSubmit}>
            <div className="form">
                <label>
                    Business Name:
                    <input
                        value={businesses.business}
                        onChange={handleInputChange}
                        name="business"
                    />
                </label>
            </div>
            <div className="form">
                <label>
                    Description:
                    <input
                        value={businesses.description}
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
                        selectedValues={businesses.category.map((item) => ({
                            label: item
                        }))}
                        onSelect={handleCategoryChange}
                        onRemove={handleCategoryChange}
                    ></Multiselect>
                </label>
            </div>
            <div className="form">
                <label>
                    Address:
                    <input
                        value={businesses.address}
                        onChange={handleInputChange}
                        name="address"
                    />
                </label>
            </div>
            <div className="form">
                <label>
                    Website URL:
                    <input
                        value={businesses.website}
                        onChange={handleInputChange}
                        name="website"
                    />
                </label>
            </div>
            <div className="form">
                <label>
                    Image URL:
                    <input
                        value={businesses.image}
                        onChange={handleInputChange}
                        name="image"
                    />
                </label>
            </div>
            <button type="submit"> Submit </button>
        </form>
    );
}

/*const initialValues = {
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
                        value={values.image}
                        onChange={handleInputChange}
                        name="image"
                    />
                </label>
            </div>
            <button type="submit"> Submit </button>
        </form>
    );
}*/
