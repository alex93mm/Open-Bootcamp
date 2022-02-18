public class Main {

    public static void main(String[] args) {

        SmartPhone phone1 = new SmartPhone("Samsung", "S10", "Mediatek 1145", "6GB", "128GB","LCD 6.1","Triple camara 64mpx 20mpx 12mpx");
        SmartWatch watch1 = new SmartWatch("Samsung", "Active 2", "Mediatek 078", "512MB", "4GB","LCD 1.1","No tiene");

        System.out.println(phone1.toString());
        System.out.println(watch1.toString());

    }

}
