import ProductForm from "../features/admin/components/ProductForm";
import NavBar from "../features/navbar/Navbar";

function AdminProductFromPage(){
    return (
        <div>
            <NavBar>
                <ProductForm></ProductForm>
            </NavBar>
        </div>
    );
}

export default AdminProductFromPage;