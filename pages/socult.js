import Head from "next/head";
import Layout from "../components/layout";

export default function Socult() {
  return (
    <Layout>
      <Head>
        <title>Socult</title>
      </Head>
      <section className="awards content">
        <h2>Social &amp; Cultural</h2>
        <p>
          Technology Students’ Gymkhana is the hub of the numerous extra-curricular and co-curricular activities in IIT
          Kharagpur ranging from sports to socio-cultural. The Gymkhana is managed by the students, for the students,
          under the guidance and active participation of the faculty and staff members. "Yogah Karmasu Kausalam" The
          moto of Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM which in English means "Perfection in action
          is Yoga". Our goal is to bring overall development in IITians through cultivating and nurturing their
          extra-curricular talents.
        </p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Event Cup</th>
                <th>Event Name</th>
                <th>Name</th>
                <th>Medal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dramatics</td>
                <td>Stage Play</td>
                <td>
                  <ul>
                    <li>Patel</li>
                    <li>Nehru</li>
                    <li>LLR</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Gold</li>
                    <li>Silver</li>
                    <li>Bronze</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}
