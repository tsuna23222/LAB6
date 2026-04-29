import exfress from 'express';
const  router = express.Router();
import swaggerUi from 'swagger-ui-express';
const swaggerDocument = YAML.load('./swagger.yaml');

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;