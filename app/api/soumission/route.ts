import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formId = process.env.HUBSPOT_FORM_ID;

    if (!portalId || !formId) {
      return NextResponse.json(
        { error: "Configuration HubSpot manquante" },
        { status: 500 }
      );
    }

    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const hubspotPayload = {
      fields: [
        { name: "firstname", value: firstName || "" },
        { name: "lastname", value: lastName || "" },
        { name: "email", value: email || "" },
        { name: "phone", value: phone || "" },
        { name: "message", value: message || "" },
      ],
      context: {
        pageUri: request.headers.get("referer") || "https://vitrerielb9.com",
        pageName: "Formulaire de soumission - Vitrerie LB9",
      },
    };

    const hubspotResponse = await fetch(hubspotUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hubspotPayload),
    });

    if (!hubspotResponse.ok) {
      const errorData = await hubspotResponse.text();
      console.error("Erreur HubSpot:", errorData);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi à HubSpot" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur route soumission:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}