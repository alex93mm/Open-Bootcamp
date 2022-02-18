public class Main {

    public static void main(String[] args) {

        CocheCRUD cocheCrud = new CocheCRUDImpl();

        cocheCrud.saveAll();
        cocheCrud.findAll();
        cocheCrud.delete();

    }

}
