import React, { useState } from "react";
import { Business } from "../Assets/instances";
import { Button } from "react-bootstrap";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { Multiselect } from "multiselect-react-dropdown";

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

export function AddBusinessForm({
    onSubmit
}: {
    onSubmit: (business: Business) => void;
}) {
    const [businesses, setBusinesses] = useSessionStorage<typeof initialValues>(
        "businesses",
        initialValues
    );
    const [business, setBusiness] = useState<Business>({
        name: "",
        description: "",
        category: "",
        location: "",
        website: "",
        image: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBusiness({ ...business, [event.target.name]: event.target.value });
    };

    const handleCategoryChange = (selectedList: { label: string }[]) => {
        setBusinesses({
            ...businesses,
            category: selectedList.map((item) => item.label)
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(business);
        setBusiness({
            name: "",
            description: "",
            category: "",
            location: "",
            website: "",
            image: ""
        });
    };

    const optionList = data;

    return (
        <form onSubmit={handleSubmit} className="add-business">
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={business.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={business.description}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
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
                    <input
                        type="text"
                        name="category"
                        value={business.category}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Location:
                    <input
                        type="text"
                        name="location"
                        value={business.location}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Website:
                    <input
                        type="text"
                        name="website"
                        value={business.website}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Image:
                    <input
                        type="text"
                        name="image"
                        value={business.image}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <br></br>
            <Button type="submit" variant="info">
                Add Business
            </Button>
        </form>
    );
}
