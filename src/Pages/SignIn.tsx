import Button from "../Components/Button";

export default function SignIn() {
    return (
        <div className="h-[60vh]">
            <div>
                <div>
                    <Button type="button" value="X" />
                </div>
                <div>
                    <p>Welcome back.</p>
                </div>
                <div>

                </div>
                <div>
                    <p>No account? Create one</p>
                </div>
                <div>
                    <p>Forgot email or trouble signing in? Get help.</p>
                </div>
                <div>
                    <p>Click “Sign in” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</p>
                </div>
            </div>
        </div>
    )
}