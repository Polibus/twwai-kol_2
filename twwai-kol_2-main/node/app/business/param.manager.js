import paramDAO from '../DAO/paramDAO';

function create() {
    async function query() {
        let result = paramDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        let result = await paramDAO.get(id);
        if (result) {
            return result;
        }
    }

    async function getLast() {
        let result = await paramDAO.getLast();
        if (result) {
            return result;
        }
    }

    //add

    async function post() {
        let result = await paramDAO.post();
        if (result) {
            return result;
        }
    }

    return {
        query:query,
        get:get,
        post:post,
        getLast
    };
}

export default {
    create: create
};
