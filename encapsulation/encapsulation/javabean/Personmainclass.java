class PersonMainClass {
    public static void main(String[] args) {
        Person P = new Person();
        P.setName("tom"); 
        String Name = P.getName();
        System.out.println(Name);
        System.out.println(P.getName());

       
        Person P2 = new Person().setName("jhon");
        P2.setName("ram");
        String Name1 = P2.getName();
        System.out.println(Name1);
        System.out.println(P2.getName());
    }
}