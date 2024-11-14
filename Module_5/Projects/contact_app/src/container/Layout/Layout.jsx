import { useSelector } from "react-redux";
import AddContactForm from "../../component/AddContactForm/AddContactForm";
import ContactCard from "../../component/ContactCard/ContactCard";


const Layout = () => {

    const contacts = useSelector(state => state.contacts);
    console.log(contacts.contactsList)

    return (
        <div>
            <header>
                John Wan
                <div>
                    Search box & Search btn
                </div>
            </header>
            <main>
                <section>
                    <div>
                       {contacts.contactsList.length} Contacts
                    </div>
                    <div>
                        <img />
                    </div>
                    <div>
                        <AddContactForm />
                    </div>
                </section>
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Mobile</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.contactsList.map(data => <ContactCard key={data.mobile} {...data} />)
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    )
};

export default Layout;