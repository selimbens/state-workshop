export default function Login() {
  return (
    <form>
      <div>
        <label>Full name</label>
        <input type="text" placeholder="write your fullname" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" placeholder="write your email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder="write your password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
