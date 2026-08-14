function reservar() {
    const numero = "573019034574";

    const mensaje = "Hola, quiero reservar una cita en Barbería Elite.";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}