import React, { useState } from "react";
import { GreenBoxKitchen } from "../Assets/instances";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { Button } from "react-bootstrap";

export function Comments() {
    const [comments, setComments] = useSessionStorage<string[]>("comments", [
        "The food is the best I've ever had! I love their aesthetic and theme!",
        "I wish I could eat here every day, I eat sleep and breathe Green Box Kitchen",
        "Get ready to find a new favorite. Every time I try something new here, I'm blown away by how good it is and wish I had tried it earlier",
        "The people who work here are always so sweet and friendly! I sometimes come here just to de-stress, and the employees always make me feel right at home."
    ]);
    const [newComment, setNewComment] = useState<string>("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setComments([...comments, newComment]);
        setNewComment("");
    }

    function handleDeleteComment(index: number) {
        setComments(comments.filter((comment, i) => i !== index));
    }

    function getCommentDate(index: number): string {
        return new Date(Date.now() + index * 3600000).toLocaleString();
    }

    return (
        <div>
            <h2>Your thoughts on this local business:</h2>
            <form onSubmit={handleSubmit} className="comment-box">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    rows={4}
                    style={{ width: "70%" }}
                />
                <br />
                <Button type="submit" variant="info">
                    Add Review
                </Button>
            </form>
            <ul className="comments-ul">
                {comments.map((comment, index) => {
                    return (
                        <li className="comments-li" key={index}>
                            <div className="author">{`Review ${
                                index + 1
                            }`}</div>
                            <div>{comment}</div>
                            <div className="date">{getCommentDate(index)}</div>
                            <Button
                                variant="danger"
                                onClick={() => handleDeleteComment(index)}
                            >
                                Delete
                            </Button>{" "}
                        </li>
                    );
                })}
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
                <br></br>
                <br></br>
                <Comments />
            </div>
            <br></br>
        </div>
    );
}
