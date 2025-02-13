import { NextRequest, NextResponse } from "next/server";
import { SiweMessage } from "siwe";

export async function POST(req: NextRequest) {
  try {
    const { message, signature } = await req.json();

    try {
      const siweMessage = new SiweMessage(message);
      const { data } = await siweMessage.verify({ signature });
      return NextResponse.json({ success: data });
    } catch (parseError) {
      console.error("❌ Error al parsear el mensaje SIWE:", parseError);
      return NextResponse.json(
        { success: false, error: parseError.message },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("❌ Error en SIWE:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
