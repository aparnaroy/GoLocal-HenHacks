import React, { useState } from "react";
import { GreenBoxKitchen } from "../Assets/instances";
import { useSessionStorage } from "../components/Display";
import { Button, Card } from "react-bootstrap";

export function Comments() {
    const [comments, setComments] = useSessionStorage<string[]>("comments", []);
    const [newComment, setNewComment] = useState<string>("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setComments([...comments, newComment]);
        setNewComment("");
    }

    return (
        <div>
            <h2>Your thoughts on this local business:</h2>
            <form onSubmit={handleSubmit} className="comments">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    rows={4} // set the number of rows to display
                    style={{ width: "70%" }}
                />
                <br />
                <Button type="submit" variant="info">
                    Add
                </Button>
            </form>
            <ul className="comments-ul">
                {comments.map((comment, index) => (
                    <li className="comments-li" key={index}>
                        <div className="author">{`Review ${index + 1}`}</div>
                        <div>{comment}</div>
                        <div className="date">
                            {new Date().toLocaleString()}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function Discussion() {
    return (
        <div className="App">
            <br></br>
            <div className="App-header">Discussion</div>
            <br></br>
            <div>
                <h1 className="App-header3">Green Box Kitchen</h1>
                <img
                    src={GreenBoxKitchen.image}
                    alt="GoLocal Logo"
                    height="400px"
                />
                <div className="comments">Hi</div>
                <Comments />
            </div>
            <br></br>
        </div>
    );
}
