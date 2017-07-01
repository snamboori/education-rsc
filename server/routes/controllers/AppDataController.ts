import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { AppDataService } from "../../services/AppDataService";

export class AppDataController {

    private router: Router = Router();

    getRouter(): Router {

        /**
         * @swagger
         * /appdata:
         *   get:
         *     tags:
         *      - AppData
         *     description:
         *      List of data.
         *     produces:
         *       - application/json
         *     responses:
         *       200:
         *         description: "status:1 is success; status: 0 is failure;"
         */
        this.router.get("/appdata", async(request: Request, response: Response) => {

            //const authors = await Author.find({}).lean().exec();

            const appDataService = new AppDataService();
            const result = appDataService.retrieve();
            App.Send(request, response, result);
            
        });
            /**
            * @swagger
            * /appdata:
            *   put:   
            *      tags:
            *      - AppData
            *      description:
            *       save.
            *      produces:
            *        - application/json
            *      parameters:
            *        - name: body
            *          in: body
            *          schema:          
            *            type: object
            *            properties:
            *               data:
            *                   type: object
            *                   properties:
            *                       _id:
            *                           type: string
            *                           example: null    
            *                       name:
            *                           type: string
            *                           example: "admin"            
            *                       key:
            *                           type: string
            *                           example: "admin"  
            *                       code:
            *                           type: string
            *                           example: "ROLE"
            *      responses:
            *           200:
            *               description: "status:1 is success; status: 0 is failure;"
            */

        this.router.put("/appdata", async(request: Request, response: Response) => {
            console.log(request.body);
            const item: any = request.body.data;
            const appDataService = new AppDataService();
            let result = appDataService.save(item);
            App.Send(request, response, result);
        });

        return this.router;
    }
}