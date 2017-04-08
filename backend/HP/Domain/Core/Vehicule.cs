
namespace HP.Domain.Core
{
    class Vehicule
    {
        public int Id { get; private set; }

        public string LicensePlate { get; set; }

        public string Brand { get; set; }

        public string Model { get; set; }

        public string Make { get; set; }

        public int BuildYear { get; set; }

        public virtual Customer Customer;
    }
}
