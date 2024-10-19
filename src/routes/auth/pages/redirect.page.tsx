import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectPage() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/login");
            // navigate("/dashboard");
        }, 1000);
    });

    return (
        <h1>Redirecting...</h1>
    )
}