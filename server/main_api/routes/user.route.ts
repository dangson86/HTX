import { Router } from 'express';


const router = Router();


const userRoute = router.route('/').get((req, res) => {
    res.json({
        name: 'son dang'
    });
});

export { router };