import Copyright from "./Copyright";

const Footer = () => {
    return (
        <footer className="container" id="abc">
            <ul>
                <li>Portfolio</li>
                <li>Customer Reviews</li>
            </ul>
            {/* <Copyright year={"2024"} companyName={"XYZ"} /> */}
            {/* <Copyright year={"2030"} companyName={"Meta Inc"} /> */}
            {/* <Copyright year={"ABC" + "XYZ"} /> */}
            <Copyright
                year={"2024"}
                nums={[
                    { userName: "John", id: 1 },
                    { userName: "Jack", id: 2 },
                    { userName: "Alex", id: 3 }
                ]}
                details={{ userName: "John Doe", age: 40, address: "123ksalf", bloodGroup: "AB+", xyz: "asldfj" }} />
        </footer>
    )
};

export default Footer;