using System.IO;
using System.Linq;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AngularExe.Controllers
{
    public class EventController : ApiController
    {
        [HttpGet]
        public JToken Get(string id = null)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            return JObject.Parse(File.ReadAllText(
                $"{path}app\\data\\event\\{id}.json"));
        }

        public JToken GetLastId()
        {

            var path = System.Web.Hosting.HostingEnvironment.MapPath("/") + "app\\data\\event";
            var mostRecentId = Directory.GetFiles(path, "*.json")
                .Select(x => Path.GetFileName(x)?.TrimEnd(".json".ToCharArray()))
                .OrderByDescending(i => i?.Length).ThenByDescending(c => c).FirstOrDefault();
            return JObject.Parse(mostRecentId != null ? $"{{\"id\":{mostRecentId }}}" : "{\"id\":0}");
        }
        [HttpPost]
        public void Post(string id, JObject eventData)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            File.WriteAllText(
                $"{path}app\\data\\event\\{id}.json",
                eventData.ToString(Formatting.None));
        }

        public JToken GetAll()
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/") + "app\\data\\event";
            var content = string.Empty;
            foreach (var file in Directory.GetFiles(path))
            {
                content += File.ReadAllText(file) + ",";

            }

            return JArray.Parse($"[{content.Substring(0, content.Length - 1)}]");
        }
    }
}
