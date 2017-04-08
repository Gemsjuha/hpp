using System.Collections.Generic;

namespace HP.Domain.Core
{
    public class Customer
    {
        public Customer()
        {
            Vehicules = new HashSet<Vehicule>();
        }

        public int Id { get; set; }

        public string LastName { get; set; }

        public string FirstName { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public virtual ICollection<Vehicule> Vehicules { get; set; }
    }
}
