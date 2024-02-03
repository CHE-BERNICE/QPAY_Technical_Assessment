import express  from "express";
import { getProducts, getProduct, createProduct, deleteProduct } from "./controller.js";
import cors from "cors";
import multer from "multer";
//import path from "path";

const app = express();

app.use(cors(
    {
        origin: ["https://catalogue-frontend-sandy.vercel.app"],
        methods: ["POST", "GET", "DELETE"],
        credentials: true
    }
));
app.use(express.json());
app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        //cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage,
    //limits: { fieldSize: 10 * 1024 * 1024 },
})

app.post("/postProducts",  upload.single('imageUrl'), async (req, res) => {
    //console.log(req.file, req.body);
    const { productName, amount, currency } = req.body;
    const imageUrl = `http://localhost:5000/images/${req.file.filename}`; // Get the path of the uploaded file

    try {
        const product = await createProduct(productName, imageUrl, amount, currency);
        res.json({ message: "Form Submitted" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    } 
});

app.get("/", (req,res) => {
    return res.json("Backend");
});
  
app.get("/products/:pageNo", async (req,res) => {
    const pageNo = req.params.pageNo;
    const {rows, pages }= await getProducts(pageNo);
    res.json({rows, pages});
});

app.get("/product/:id", async (req,res) => {
    const id = req.params.id;
    const product = await getProduct(id);
    res.json(product);
});



app.delete("/delProduct/:id", async (req,res) => {
    const id = req.params.id;
    const product = await deleteProduct(id);
    res.json({"Message" : "Deleted successfully!"});
});

app.use((err, req, res, next ) => {
    console.error(err.stack);
    res.status(500).send('Something is wrong');
});

app.listen(5000);