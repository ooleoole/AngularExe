using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AngularExe.Controllers
{
    public class EventController : ApiController
    {

        public JToken Get(string id = null)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            return JObject.Parse(System.IO.File.ReadAllText(
                $"{path}app\\data\\event\\{id}.json"));
        }

        public void Post(string id, JObject eventData)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            System.IO.File.WriteAllText(
                $"{path}app\\data\\event\\{id}.json",
                eventData.ToString(Formatting.None));
        }
    }
}
