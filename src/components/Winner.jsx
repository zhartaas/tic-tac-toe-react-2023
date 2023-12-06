export default function Winner(user) {
    const us = user.user;
    return (
        <div className="container m-auto bg-gradient-to-r from-green-400 to-blue-500 w-80 h-40 text-center flex flex-col justify-center items-center">
            <h1>Congratulations!</h1>
            <p>{us} are the winner!</p>
        </div>
    );
}